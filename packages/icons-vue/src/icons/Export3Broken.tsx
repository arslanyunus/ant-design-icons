// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export3BrokenSvg from '@ant-design/icons-svg/lib/asn/Export3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export3Broken: Export3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export3BrokenSvg}></AntdIcon>;
};

Export3Broken.displayName = 'Export3Broken';
Export3Broken.inheritAttrs = false;
export default Export3Broken;