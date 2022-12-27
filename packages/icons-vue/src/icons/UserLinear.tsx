// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserLinearSvg from '@ant-design/icons-svg/lib/asn/UserLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserLinear: UserLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserLinearSvg}></AntdIcon>;
};

UserLinear.displayName = 'UserLinear';
UserLinear.inheritAttrs = false;
export default UserLinear;