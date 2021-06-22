import { drizzleReactHooks } from "@drizzle/react-plugin";

const { useDrizzleState } = drizzleReactHooks;

const LoadingContainer = ({children}) => {
    const drizzleStatus = useDrizzleState(state => state.drizzleStatus);
    if(drizzleStatus.initialized === false) {
        return (
            <div class="loader-wrapper">
                <div class="loader"></div>
            </div>
        );
    }else {
        return <>{children}</>;
    }
}

export default LoadingContainer;