// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExportBoldSvg from '@ant-design/icons-svg/lib/asn/ExportBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExportBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExportBold: ExportBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExportBoldSvg}></AntdIcon>;
};

ExportBold.displayName = 'ExportBold';
ExportBold.inheritAttrs = false;
export default ExportBold;