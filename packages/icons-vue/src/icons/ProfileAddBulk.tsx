// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileAddBulkSvg from '@ant-design/icons-svg/lib/asn/ProfileAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileAddBulk: ProfileAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileAddBulkSvg}></AntdIcon>;
};

ProfileAddBulk.displayName = 'ProfileAddBulk';
ProfileAddBulk.inheritAttrs = false;
export default ProfileAddBulk;