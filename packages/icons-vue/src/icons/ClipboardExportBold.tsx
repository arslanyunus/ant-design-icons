// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardExportBoldSvg from '@ant-design/icons-svg/lib/asn/ClipboardExportBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardExportBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardExportBold: ClipboardExportBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardExportBoldSvg}></AntdIcon>;
};

ClipboardExportBold.displayName = 'ClipboardExportBold';
ClipboardExportBold.inheritAttrs = false;
export default ClipboardExportBold;