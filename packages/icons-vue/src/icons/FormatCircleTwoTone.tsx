// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/FormatCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatCircleTwoTone: FormatCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatCircleTwoToneSvg}></AntdIcon>;
};

FormatCircleTwoTone.displayName = 'FormatCircleTwoTone';
FormatCircleTwoTone.inheritAttrs = false;
export default FormatCircleTwoTone;