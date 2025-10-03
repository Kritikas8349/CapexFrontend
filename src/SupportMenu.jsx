// SupportMenu.jsx
import { Link } from "react-router-dom";

export default function SupportMenu() {
  return (
    <ul>
      <li>
        <Link to="/support/getting-started">Getting Started</Link>
        <ul>
          <li><Link to="/support/getting-started/create-account">Create Account</Link></li>
          <li><Link to="/support/getting-started/verify-account">Verify Account</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/support/platform-support">Platform Support</Link>
        <ul>
          <li><Link to="/support/platform/invest/open-share-account">Open Share Account</Link></li>
          <li><Link to="/support/platform/invest/fund-share-account">Fund Share Account</Link></li>
        </ul>
      </li>
    </ul>
  );
}
