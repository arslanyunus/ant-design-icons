// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ElementPlusTwoToneSvg from '@ant-design/icons-svg/lib/asn/ElementPlusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ElementPlusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ElementPlusTwoTone: ElementPlusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ElementPlusTwoToneSvg}></AntdIcon>;
};

ElementPlusTwoTone.displayName = 'ElementPlusTwoTone';
ElementPlusTwoTone.inheritAttrs = false;
export default ElementPlusTwoTone;