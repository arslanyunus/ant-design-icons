// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid5TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid5TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid5TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid5TwoTone: Grid5TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid5TwoToneSvg}></AntdIcon>;
};

Grid5TwoTone.displayName = 'Grid5TwoTone';
Grid5TwoTone.inheritAttrs = false;
export default Grid5TwoTone;