// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxSearchTwoTone: BoxSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxSearchTwoToneSvg}></AntdIcon>;
};

BoxSearchTwoTone.displayName = 'BoxSearchTwoTone';
BoxSearchTwoTone.inheritAttrs = false;
export default BoxSearchTwoTone;