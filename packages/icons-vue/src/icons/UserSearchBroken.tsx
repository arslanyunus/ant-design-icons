// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/UserSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSearchBroken: UserSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchBrokenSvg}></AntdIcon>;
};

UserSearchBroken.displayName = 'UserSearchBroken';
UserSearchBroken.inheritAttrs = false;
export default UserSearchBroken;