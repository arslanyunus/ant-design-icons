// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Flash1BoldSvg from '@ant-design/icons-svg/lib/asn/Flash1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Flash1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Flash1Bold: Flash1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Flash1BoldSvg}></AntdIcon>;
};

Flash1Bold.displayName = 'Flash1Bold';
Flash1Bold.inheritAttrs = false;
export default Flash1Bold;