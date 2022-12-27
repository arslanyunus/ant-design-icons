// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export1BrokenSvg from '@ant-design/icons-svg/lib/asn/Export1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export1Broken: Export1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export1BrokenSvg}></AntdIcon>;
};

Export1Broken.displayName = 'Export1Broken';
Export1Broken.inheritAttrs = false;
export default Export1Broken;