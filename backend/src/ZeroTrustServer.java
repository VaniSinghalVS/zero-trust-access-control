// Configurable trust weights
static final int DEVICE_WEIGHT = 20;
static final int TIME_WEIGHT = 15;
static final int IP_WEIGHT = 15;
static final int MFA_WEIGHT = 20;
static final int GEO_WEIGHT = 15;
static final int BEHAVIOR_WEIGHT = 15;

public class ZeroTrustServer 
{
    public static void main(String[] args) 
    {
        System.out.println("Zero Trust Backend Started\n");

        // Input parameters (simulated)
        String username = "admin";
        String role = "admin";

        boolean knownDevice = true;
        boolean normalLoginTime = true;
        boolean sameIP = true;
        boolean mfaEnabled = true;
        boolean geoLocationMatch = true;
        boolean lowRiskBehavior = false;

        // Log inputs
        logEvent("Login attempt by user: " + username);
        logEvent("User role: " + role);

        System.out.println("\nTrust Factors");
        System.out.println("Known Device: " + knownDevice);
        System.out.println("Normal Login Time: " + normalLoginTime);
        System.out.println("Same IP Address: " + sameIP);
        System.out.println("MFA Enabled: " + mfaEnabled);
        System.out.println("Geo-location Match: " + geoLocationMatch);
        System.out.println("Low Risk Behavior: " + lowRiskBehavior);

        int trustScore = calculateTrustScore(
            knownDevice,
            normalLoginTime,
            sameIP,
            mfaEnabled,
            geoLocationMatch,
            lowRiskBehavior
        );

        logEvent("Base trust score calculated: " + trustScore);
        trustScore = applyRolePolicy(role, trustScore);
        logEvent("Trust score after role policy: " + trustScore);
        System.out.println("\nFinal Trust Score: " + trustScore);

        String decision = getAccessDecision(trustScore);
        System.out.println("ACCESS DECISION: " + decision);
        logEvent("Access decision enforced");
    }

    // Trust score calculation
    public static int calculateTrustScore(
        boolean knownDevice,
        boolean normalTime,
        boolean sameIP,
        boolean mfaEnabled,
        boolean geoLocationMatch,
        boolean lowRiskBehavior) 
    {
        int score = 0;

        if (knownDevice) score += DEVICE_WEIGHT;
        if (normalTime) score += TIME_WEIGHT;
        if (sameIP) score += IP_WEIGHT;
        if (mfaEnabled) score += MFA_WEIGHT;
        if (geoLocationMatch) score += GEO_WEIGHT;
        if (lowRiskBehavior) score += BEHAVIOR_WEIGHT;

        return score;
    }

    // Role-based policy
    public static int applyRolePolicy(String role, int score) 
    {
        if (role.equalsIgnoreCase("admin")) 
        {
            return score + 10;
        } 
        else if (role.equalsIgnoreCase("user")) 
        {
            return score;
        }
        else 
        {
            return score - 20;
        }
    }

    System.out.println("\n--- Risk Analysis ---");

    if (!knownDevice) {
        logEvent("Risk detected: Unknown device");
    }
    if (!geoLocationMatch) {
        logEvent("Risk detected: Geo-location mismatch");
    }
    if (!sameIP) {
        logEvent("Risk detected: IP address change");
    }
    if (!mfaEnabled) {
        logEvent("Risk detected: MFA not enabled");
    }

    // Access decision logic
    public static String getAccessDecision(int trustScore) 
    {
        if (trustScore >= 70) 
        {
            return "ACCESS GRANTED";
        } 
        else if (trustScore >= 40) 
        {
            return "EXTRA VERIFICATION REQUIRED";
        } 
        else 
        {
            return "ACCESS DENIED";
        }
    }

    // Audit logging
    public static void logEvent(String message) 
    {
        System.out.println("[LOG] " + message);
    }
}
