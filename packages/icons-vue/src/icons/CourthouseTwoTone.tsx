// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CourthouseTwoToneSvg from '@ant-design/icons-svg/lib/asn/CourthouseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CourthouseTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CourthouseTwoTone: CourthouseTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CourthouseTwoToneSvg}></AntdIcon>;
};

CourthouseTwoTone.displayName = 'CourthouseTwoTone';
CourthouseTwoTone.inheritAttrs = false;
export default CourthouseTwoTone;