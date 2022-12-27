// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertLinearSvg from '@ant-design/icons-svg/lib/asn/ConvertLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertLinear: ConvertLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertLinearSvg}></AntdIcon>;
};

ConvertLinear.displayName = 'ConvertLinear';
ConvertLinear.inheritAttrs = false;
export default ConvertLinear;