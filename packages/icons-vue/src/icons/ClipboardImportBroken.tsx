// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardImportBrokenSvg from '@ant-design/icons-svg/lib/asn/ClipboardImportBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardImportBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardImportBroken: ClipboardImportBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardImportBrokenSvg}></AntdIcon>;
};

ClipboardImportBroken.displayName = 'ClipboardImportBroken';
ClipboardImportBroken.inheritAttrs = false;
export default ClipboardImportBroken;