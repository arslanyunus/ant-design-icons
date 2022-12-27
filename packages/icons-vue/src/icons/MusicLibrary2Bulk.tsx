// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicLibrary2BulkSvg from '@ant-design/icons-svg/lib/asn/MusicLibrary2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicLibrary2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicLibrary2Bulk: MusicLibrary2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicLibrary2BulkSvg}></AntdIcon>;
};

MusicLibrary2Bulk.displayName = 'MusicLibrary2Bulk';
MusicLibrary2Bulk.inheritAttrs = false;
export default MusicLibrary2Bulk;