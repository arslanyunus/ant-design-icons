// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSearchBoldSvg from '@ant-design/icons-svg/lib/asn/UserSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSearchBold: UserSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchBoldSvg}></AntdIcon>;
};

UserSearchBold.displayName = 'UserSearchBold';
UserSearchBold.inheritAttrs = false;
export default UserSearchBold;