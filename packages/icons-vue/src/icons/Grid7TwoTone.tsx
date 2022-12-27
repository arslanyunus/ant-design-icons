// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid7TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid7TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid7TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid7TwoTone: Grid7TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid7TwoToneSvg}></AntdIcon>;
};

Grid7TwoTone.displayName = 'Grid7TwoTone';
Grid7TwoTone.inheritAttrs = false;
export default Grid7TwoTone;