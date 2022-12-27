// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTagBulkSvg from '@ant-design/icons-svg/lib/asn/UserTagBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTagBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTagBulk: UserTagBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTagBulkSvg}></AntdIcon>;
};

UserTagBulk.displayName = 'UserTagBulk';
UserTagBulk.inheritAttrs = false;
export default UserTagBulk;