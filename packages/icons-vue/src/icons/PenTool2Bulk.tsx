// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool2BulkSvg from '@ant-design/icons-svg/lib/asn/PenTool2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool2Bulk: PenTool2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool2BulkSvg}></AntdIcon>;
};

PenTool2Bulk.displayName = 'PenTool2Bulk';
PenTool2Bulk.inheritAttrs = false;
export default PenTool2Bulk;