// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/FormatSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatSquareBroken: FormatSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatSquareBrokenSvg}></AntdIcon>;
};

FormatSquareBroken.displayName = 'FormatSquareBroken';
FormatSquareBroken.inheritAttrs = false;
export default FormatSquareBroken;