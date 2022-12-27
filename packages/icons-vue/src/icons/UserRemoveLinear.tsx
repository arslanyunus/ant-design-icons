// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserRemoveLinearSvg from '@ant-design/icons-svg/lib/asn/UserRemoveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserRemoveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserRemoveLinear: UserRemoveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserRemoveLinearSvg}></AntdIcon>;
};

UserRemoveLinear.displayName = 'UserRemoveLinear';
UserRemoveLinear.inheritAttrs = false;
export default UserRemoveLinear;