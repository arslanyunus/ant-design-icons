// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserAddBulkSvg from '@ant-design/icons-svg/lib/asn/UserAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserAddBulk: UserAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddBulkSvg}></AntdIcon>;
};

UserAddBulk.displayName = 'UserAddBulk';
UserAddBulk.inheritAttrs = false;
export default UserAddBulk;