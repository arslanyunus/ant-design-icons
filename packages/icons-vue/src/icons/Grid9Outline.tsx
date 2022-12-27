// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid9OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid9Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid9OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid9Outline: Grid9OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid9OutlineSvg}></AntdIcon>;
};

Grid9Outline.displayName = 'Grid9Outline';
Grid9Outline.inheritAttrs = false;
export default Grid9Outline;