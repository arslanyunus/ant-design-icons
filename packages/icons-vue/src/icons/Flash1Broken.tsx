// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flash1BrokenSvg from '@ant-design/icons-svg/lib/asn/Flash1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flash1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flash1Broken: Flash1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flash1BrokenSvg}></AntdIcon>;
};

Flash1Broken.displayName = 'Flash1Broken';
Flash1Broken.inheritAttrs = false;
export default Flash1Broken;