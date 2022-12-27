// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExportBulkSvg from '@ant-design/icons-svg/lib/asn/ExportBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExportBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExportBulk: ExportBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExportBulkSvg}></AntdIcon>;
};

ExportBulk.displayName = 'ExportBulk';
ExportBulk.inheritAttrs = false;
export default ExportBulk;