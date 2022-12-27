// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PaperclipBrokenSvg from '@ant-design/icons-svg/lib/asn/PaperclipBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PaperclipBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PaperclipBroken: PaperclipBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaperclipBrokenSvg}></AntdIcon>;
};

PaperclipBroken.displayName = 'PaperclipBroken';
PaperclipBroken.inheritAttrs = false;
export default PaperclipBroken;