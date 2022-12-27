// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTickBrokenSvg from '@ant-design/icons-svg/lib/asn/UserTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTickBroken: UserTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTickBrokenSvg}></AntdIcon>;
};

UserTickBroken.displayName = 'UserTickBroken';
UserTickBroken.inheritAttrs = false;
export default UserTickBroken;