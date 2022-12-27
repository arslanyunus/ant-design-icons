// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid3OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid3Outline: Grid3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid3OutlineSvg}></AntdIcon>;
};

Grid3Outline.displayName = 'Grid3Outline';
Grid3Outline.inheritAttrs = false;
export default Grid3Outline;