// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaperclipBoldSvg from '@ant-design/icons-svg/lib/asn/PaperclipBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaperclipBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaperclipBold: PaperclipBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaperclipBoldSvg}></AntdIcon>;
};

PaperclipBold.displayName = 'PaperclipBold';
PaperclipBold.inheritAttrs = false;
export default PaperclipBold;