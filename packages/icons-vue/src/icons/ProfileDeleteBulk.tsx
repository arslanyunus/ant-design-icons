// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileDeleteBulkSvg from '@ant-design/icons-svg/lib/asn/ProfileDeleteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileDeleteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileDeleteBulk: ProfileDeleteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileDeleteBulkSvg}></AntdIcon>;
};

ProfileDeleteBulk.displayName = 'ProfileDeleteBulk';
ProfileDeleteBulk.inheritAttrs = false;
export default ProfileDeleteBulk;