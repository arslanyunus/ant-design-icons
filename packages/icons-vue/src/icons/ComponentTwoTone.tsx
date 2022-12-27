// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ComponentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ComponentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ComponentTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ComponentTwoTone: ComponentTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ComponentTwoToneSvg}></AntdIcon>;
};

ComponentTwoTone.displayName = 'ComponentTwoTone';
ComponentTwoTone.inheritAttrs = false;
export default ComponentTwoTone;