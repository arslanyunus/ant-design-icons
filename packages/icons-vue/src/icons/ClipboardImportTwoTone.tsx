// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardImportTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClipboardImportTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardImportTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardImportTwoTone: ClipboardImportTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardImportTwoToneSvg}></AntdIcon>;
};

ClipboardImportTwoTone.displayName = 'ClipboardImportTwoTone';
ClipboardImportTwoTone.inheritAttrs = false;
export default ClipboardImportTwoTone;