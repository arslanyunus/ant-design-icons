// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardImportBoldSvg from '@ant-design/icons-svg/lib/asn/ClipboardImportBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardImportBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardImportBold: ClipboardImportBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardImportBoldSvg}></AntdIcon>;
};

ClipboardImportBold.displayName = 'ClipboardImportBold';
ClipboardImportBold.inheritAttrs = false;
export default ClipboardImportBold;