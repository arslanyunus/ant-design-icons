// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Square3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Square3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Square3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Square3TwoTone: Square3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Square3TwoToneSvg}></AntdIcon>;
};

Square3TwoTone.displayName = 'Square3TwoTone';
Square3TwoTone.inheritAttrs = false;
export default Square3TwoTone;