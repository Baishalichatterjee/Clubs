import Notice from "./Notice"
import './css/noticeBoard.css'

function NoticeBoard() {
    return (
        <div className="notice-board">
            <h2>Notice Board --</h2>
            <div className="notices-outer">
                <div className="notices-inner">
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice />
                    <Notice desc="rajur pond marano"/>
                </div>

            </div>
        </div>
    )
}
export default NoticeBoard