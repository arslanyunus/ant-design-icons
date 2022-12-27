// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOctagonLinearSvg from '@ant-design/icons-svg/lib/asn/UserOctagonLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOctagonLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOctagonLinear: UserOctagonLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOctagonLinearSvg}></AntdIcon>;
};

UserOctagonLinear.displayName = 'UserOctagonLinear';
UserOctagonLinear.inheritAttrs = false;
export default UserOctagonLinear;