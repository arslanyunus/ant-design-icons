// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSearchBulkSvg from '@ant-design/icons-svg/lib/asn/UserSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSearchBulk: UserSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSearchBulkSvg}></AntdIcon>;
};

UserSearchBulk.displayName = 'UserSearchBulk';
UserSearchBulk.inheritAttrs = false;
export default UserSearchBulk;