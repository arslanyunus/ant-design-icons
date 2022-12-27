// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserAddLinearSvg from '@ant-design/icons-svg/lib/asn/UserAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserAddLinear: UserAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddLinearSvg}></AntdIcon>;
};

UserAddLinear.displayName = 'UserAddLinear';
UserAddLinear.inheritAttrs = false;
export default UserAddLinear;