// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardExportBrokenSvg from '@ant-design/icons-svg/lib/asn/ClipboardExportBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardExportBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardExportBroken: ClipboardExportBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardExportBrokenSvg}></AntdIcon>;
};

ClipboardExportBroken.displayName = 'ClipboardExportBroken';
ClipboardExportBroken.inheritAttrs = false;
export default ClipboardExportBroken;