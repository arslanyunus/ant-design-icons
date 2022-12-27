// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserCirlceAddBulkSvg from '@ant-design/icons-svg/lib/asn/UserCirlceAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserCirlceAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserCirlceAddBulk: UserCirlceAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserCirlceAddBulkSvg}></AntdIcon>;
};

UserCirlceAddBulk.displayName = 'UserCirlceAddBulk';
UserCirlceAddBulk.inheritAttrs = false;
export default UserCirlceAddBulk;