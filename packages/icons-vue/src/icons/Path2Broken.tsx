// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Path2BrokenSvg from '@ant-design/icons-svg/lib/asn/Path2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Path2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Path2Broken: Path2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Path2BrokenSvg}></AntdIcon>;
};

Path2Broken.displayName = 'Path2Broken';
Path2Broken.inheritAttrs = false;
export default Path2Broken;