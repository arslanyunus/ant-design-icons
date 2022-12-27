// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeLow1BulkSvg from '@ant-design/icons-svg/lib/asn/VolumeLow1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeLow1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeLow1Bulk: VolumeLow1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeLow1BulkSvg}></AntdIcon>;
};

VolumeLow1Bulk.displayName = 'VolumeLow1Bulk';
VolumeLow1Bulk.inheritAttrs = false;
export default VolumeLow1Bulk;