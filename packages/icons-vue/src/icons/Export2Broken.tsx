// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Export2BrokenSvg from '@ant-design/icons-svg/lib/asn/Export2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Export2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Export2Broken: Export2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Export2BrokenSvg}></AntdIcon>;
};

Export2Broken.displayName = 'Export2Broken';
Export2Broken.inheritAttrs = false;
export default Export2Broken;