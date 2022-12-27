// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClipboardTickBoldSvg from '@ant-design/icons-svg/lib/asn/ClipboardTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClipboardTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClipboardTickBold: ClipboardTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardTickBoldSvg}></AntdIcon>;
};

ClipboardTickBold.displayName = 'ClipboardTickBold';
ClipboardTickBold.inheritAttrs = false;
export default ClipboardTickBold;