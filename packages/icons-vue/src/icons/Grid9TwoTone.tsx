// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid9TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid9TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid9TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid9TwoTone: Grid9TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid9TwoToneSvg}></AntdIcon>;
};

Grid9TwoTone.displayName = 'Grid9TwoTone';
Grid9TwoTone.inheritAttrs = false;
export default Grid9TwoTone;