// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserEditBulkSvg from '@ant-design/icons-svg/lib/asn/UserEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserEditBulk: UserEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserEditBulkSvg}></AntdIcon>;
};

UserEditBulk.displayName = 'UserEditBulk';
UserEditBulk.inheritAttrs = false;
export default UserEditBulk;