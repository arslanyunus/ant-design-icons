// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSearchLinearSvg from '@ant-design/icons-svg/lib/asn/UserSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSearchLinear: UserSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchLinearSvg}></AntdIcon>;
};

UserSearchLinear.displayName = 'UserSearchLinear';
UserSearchLinear.inheritAttrs = false;
export default UserSearchLinear;