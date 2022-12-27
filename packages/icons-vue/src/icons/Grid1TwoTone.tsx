// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid1TwoTone: Grid1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid1TwoToneSvg}></AntdIcon>;
};

Grid1TwoTone.displayName = 'Grid1TwoTone';
Grid1TwoTone.inheritAttrs = false;
export default Grid1TwoTone;