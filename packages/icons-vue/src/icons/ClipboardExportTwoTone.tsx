// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardExportTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClipboardExportTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardExportTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardExportTwoTone: ClipboardExportTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardExportTwoToneSvg}></AntdIcon>;
};

ClipboardExportTwoTone.displayName = 'ClipboardExportTwoTone';
ClipboardExportTwoTone.inheritAttrs = false;
export default ClipboardExportTwoTone;